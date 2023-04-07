from pykeepass import PyKeePass
import re

class kdbxParser:

    def __init__(self, file, password):
        self.db = PyKeePass(file, password=password)

        keys = ["/".join(g.path) if g.path else g.name for g in self.db.groups]
        self.groups = { k : self.__find_group(k) for k in keys }

    # Dictionary for a specific group with entry titles as keys and corresponding pykeepass entry objects as values.
    def group_entries(self, groupName):
        group = self.groups[groupName]
        titles = [e.title for e in group.entries]
        return { t : self.__find_entry(t, group) for t in titles }


    ### PRIVATE METHODS:

    def __find_group(self, key):
        name = key.split("/")[-1]
        found = self.db.find_groups(name=name)
        if len(found) == 1:
            return found[0]
        else:
            return next(filter(lambda g: key in g.__str__().split('"'), found))

    def __find_entry(self, title, group):
        found = self.db.find_entries(title=title)
        if len(found) == 1:
            return found[0]
        else:
            path = title if not group.path else "/".join(group.path) + "/" + title
            return next(filter(lambda e: self.__entry_path_match(path, e.__str__()), found))

    def __entry_path_match(self, path, entry_str):
        match = re.search('"(.*)\s\(', entry_str)
        return path == match.group(1)
