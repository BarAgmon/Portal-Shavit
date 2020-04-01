class Database:
    def __init__(self, name):
        self.name = name

    def getName(self):
        return self.name
    
    def setName(self, newName):
        self.name = newName
    
    def __eq__(self, other):
        return self.getName() == other.getName()
    
    def __hash__(self):
        return hash((self.name))