import set_package_attribute
set_package_attribute.init()
from flask import Flask
app = Flask(__name__)
import unittest
from .UnitTesting.ServerConnectionUnitTesting import ServerConnectionUnitTesting


def create_suite():
    test_suite = unittest.TestSuite()
    test_suite.addTest(ServerConnectionUnitTesting())
    return test_suite

def run_all_tests():
    suite = create_suite()
    runner=unittest.TextTestRunner()
    runner.run(suite)

if __name__ == '__main__':
    run_all_tests()
    app.run(host='0.0.0.0', port=80)
    