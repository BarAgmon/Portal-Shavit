class Schema:
    def __init__(self, name, database):
        self.name = name
        self.database = database

    def get_name(self):
        return self.name
    
    def set_name(self, newName):
        self.name = newName
    
    def get_database(self):
        return self.database
    
    def set_database(self, newDatabase):
        self.database = newDatabase