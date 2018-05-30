import cgitb
import cgi
cgitb.enable()

file_object = open("ui_design.html" ,'r' )

lines = file_object.readlines()

for line in lines:
    print(line)

form = cgi.FieldStorage()

