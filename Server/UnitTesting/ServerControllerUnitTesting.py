import set_package_attribute
set_package_attribute.init()
import unittest
import sys
from ..RemoteServerController.ServerConnection import connectToRemoteServer
from ..Exceptions.ServerConnectionError import ServerConnectionError
from ..RemoteServerController.Postgres.Database import convert_dbs_string_to_dbs_list
from ..Objects.PostgresDbObjects.Database import Database

class ServerControllerUnitTesting(unittest.TestCase):

    def test_GivenWrongUsernameAndPasswordWhenConnectToRemoteServerThenThrowException(self):
        self.assertRaises(ServerConnectionError, lambda:connectToRemoteServer('bar','12345','12345'))

    def test_GivenStringThenReturnedListOfDatabases(self):
        INPUT = 'databases\n----------------\nfirst\nsecond\nthird\nrows(3)'
        EXPECTED_OUTPUT = {Database("first"), Database("second"), Database("third")}
        print (convert_dbs_string_to_dbs_list(INPUT))
        self.assertEqual(convert_dbs_string_to_dbs_list(INPUT), EXPECTED_OUTPUT)
        
if __name__ == "__main__":
    unittest.main()
