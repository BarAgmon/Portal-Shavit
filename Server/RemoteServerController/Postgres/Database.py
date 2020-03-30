import set_package_attribute
set_package_attribute.init()
from ...Objects.PostgresDbObjects.Database import Database
from ..ServerConnection import connectToRemoteServer
from ...Exceptions.ServerConnectionError import ServerConnectionError
from .Constants import POSTGRES_HOST_NAME, GET_ALL_DATABASES_COMMAND
def get_all_dbs(serverUsername, serverPassword):
    
#     try :
#         client = connectToRemoteServer(POSTGRES_HOST_NAME, serverUsername, serverPassword)
#     except ServerConnectionError as e:
#         raise e
    
#     #TODO: check what the exec_command throws when error occurred, and try-except it 
#     client.exec_command('su - postgres')
#     stdout = client.exec_command("psql -c " + GET_ALL_DATABASES_COMMAND)
#     return convert_db_string_to_db_list(stdout)

# #TODO: write this function according to output
# def convert_db_string_to_db_list(dbString):
#     return # database list

    return {Database("plz"), Database("balagan"), Database("devops"), Database("randomName"), Database("banana")}

