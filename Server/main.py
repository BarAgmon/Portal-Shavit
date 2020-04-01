import set_package_attribute
set_package_attribute.init()
from flask import Flask
app = Flask(__name__)
import unittest
from .UnitTesting.ServerControllerUnitTesting import ServerControllerUnitTesting


def create_suite():
    test_suite = unittest.TestSuite()
    testsToAdd=unittest.defaultTestLoader.loadTestsFromTestCase(ServerControllerUnitTesting)
    test_suite.addTest(testsToAdd)
    return test_suite

def run_all_tests():
    runner=unittest.TextTestRunner()
    runner.run(create_suite())

if __name__ == '__main__':
    run_all_tests()
    app.run(host='0.0.0.0', port=80)
    