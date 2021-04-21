"""
This module defines the Repository database class.
"""

from ..base import Base


class Repository(Base.Model):
    __tablename__ = "repository"
    id = Base.Column(Base.Integer, primary_key=True)
    name = Base.Column(Base.String, nullable=False)
    start = Base.Column(Base.DateTime, nullable=False)
    end = Base.Column(Base.DateTime, nullable=False)
    # Foreign Keys
    owner_id = Base.Column(Base.String, Base.ForeignKey("user.email"), nullable=False)
    # Relationships
    owner = Base.relationship("User", back_populates="owner_of")
    authorizations = Base.relationship("Authorization", back_populates="repository")
    tweets = Base.relationship("Composed", back_populates="repository")
    alerts = Base.relationship("Alert", back_populates="repository")