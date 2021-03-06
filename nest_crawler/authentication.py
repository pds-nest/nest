import tweepy as tw
import os


def authenticate():
    c_k = os.environ['C_K']
    c_s = os.environ['C_S']
    a_t = os.environ['A_T']
    a_t_s = os.environ['A_T_S']

    auth = tw.OAuthHandler(c_k, c_s)
    auth.set_access_token(a_t, a_t_s)
    api = tw.API(auth, wait_on_rate_limit=True)
    # client = tw.Client(b_t, c_k, c_s, a_t, a_t_s, wait_on_rate_limit=True);
    return api


__all__ = (
    "authenticate",
)
