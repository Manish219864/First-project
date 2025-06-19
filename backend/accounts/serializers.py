from django.contrib.auth import authenticate, get_user_model
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

User = get_user_model()


class EmailTokenObtainPairSerializer(TokenObtainPairSerializer):
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        username = attrs.get("username")
        email = attrs.get("email")
        password = attrs.get("password")

        if not username or not email or not password:
            raise serializers.ValidationError({"detail": "Username, email, and password are required."})

        try:
            user = User.objects.get(username=username, email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError({"detail": "Invalid email or username."})

        if not user.check_password(password):
            raise serializers.ValidationError({"detail": "Invalid password."})

        # Pass username to super().validate to generate token
        data = super().validate({
            "username": user.username,
            "password": password
        })

        data["email"] = user.email
        data["username"] = user.username
        return data

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["email"] = user.email
        token["username"] = user.username
        return token


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "email", "password"]
        extra_kwargs = {
            "password": {"write_only": True}
        }

    def create(self, validated_data):
        username = validated_data["username"]
        email = validated_data["email"]
        password = validated_data["password"]

        if User.objects.filter(username=username).exists():
            raise serializers.ValidationError({"username": "Username already exists"})
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError({"email": "Email already exists"})

        return User.objects.create_user(username=username, email=email, password=password)
