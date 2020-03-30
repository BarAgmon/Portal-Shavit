import set_package_attribute
set_package_attribute.init()
import unittest
import sys
from ..RemoteServerController.ServerConnection import connectToRemoteServer
from ..Exceptions.ServerConnectionError import ServerConnectionError

class ServerConnectionUnitTesting(unittest.TestCase):

    def runTest(self):
        self.assertRaises(ServerConnectionError, lambda:connectToRemoteServer('bar','12345','12345'))
        
if __name__ == "__main__":
    unittest.main()
