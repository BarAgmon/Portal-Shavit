def convert_database_set_to_json(databasesSet):
    DATABASES = "Databases"
    AllDatabases = {DATABASES:[]}
    for db in databasesSet:
        AllDatabases[DATABASES].append(db.to_json())
    return AllDatabases
