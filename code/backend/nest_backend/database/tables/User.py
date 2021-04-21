"""
This module defines the User database class.
"""

from ..base import Base


class User(Base.Model):
    __tablename__ = "user"
    email = Base.Column(Base.String, primary_key=True)
    username = Base.Column(Base.String, nullable=False)
    password = Base.Column(Base.LargeBinary, nullable=False)
    isAdmin = Base.Column(Base.Boolean, default=False)
    # Relationships
    owner_of = Base.relationship("Repository", back_populates="owner")
    authorizations = Base.relationship("Authorization", back_populates="user")