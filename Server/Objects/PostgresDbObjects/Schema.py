class Schema:
    def __init__(self, name, database):
        self.name = name
        self.database = database

    def getName(self):
        return self.name
    
    def setName(self, newName):
        self.name = newName
    
    def getDatabase(self):
        return self.database
    
    def setDatabase(self, newDatabase):
        self.database = newDatabase