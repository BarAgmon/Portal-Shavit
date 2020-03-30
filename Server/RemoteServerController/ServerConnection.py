from paramiko import SSHClient
import sys
from ..Exceptions.ServerConnectionError import ServerConnectionError

def connectToRemoteServer(hostname,username, password) :
    client = SSHClient()
    client.load_system_host_keys()
    try:
        client.connect(hostname=hostname,username=username,password=password)
        return client
    except Exception:
        client.close()
        EXCEPTION_MESSAGE = 'Something went wrong with server connection. Please check the username and password, and try again.'
        raise ServerConnectionError(EXCEPTION_MESSAGE)


