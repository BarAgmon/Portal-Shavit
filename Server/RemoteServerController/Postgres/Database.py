import set_package_attribute
set_package_attribute.init()
from ...Objects.PostgresDbObjects.Database import Database
from ..ServerConnection import connectToRemoteServer
from ...Exceptions.ServerConnectionError import ServerConnectionError
from .Constants import POSTGRES_HOST_NAME, GET_ALL_DATABASES_COMMAND

def get_all_dbs(serverUsername, serverPassword):
#     allDbsList = get_db_list_from_server(serverUsername,serverPassword)
#     return convert_dbs_string_to_dbs_list(allDbsList)
# def get_db_list_from_server(serverUsername, serverPassword):   
#     try :
#         client = connectToRemoteServer(POSTGRES_HOST_NAME, serverUsername, serverPassword)
#     except ServerConnectionError as e:
#         raise e
    
#     #TODO: check what the exec_command throws when error occurred, and try-except it 
#     client.exec_command('su - postgres')
#     stdout = client.exec_command("psql -c '" + GET_ALL_DATABASES_COMMAND + "'")
#     return stdout
    return {Database("plz"), Database("balagan"), Database("devops"), Database("randomName"), Database("banana")}

def convert_dbs_string_to_dbs_list(dbString):
    FIRST_LINE_NUMBER_WITH_DB_NAME = 2
    dbsStringAsList = dbString.splitlines()  
    finalDatabaseList = set()
    for i in range (FIRST_LINE_NUMBER_WITH_DB_NAME, len(dbsStringAsList) - 1):
        finalDatabaseList.add(Database(dbsStringAsList[i]))
    return finalDatabaseList

    


