USE l18;;
-- DROP TABLE IF EXISTS mysite_pylib_defs;;
CREATE TABLE mysite_pylib_defs (;
id INT AUTO_INCREMENT NOT NULL,;
def VARCHAR(255),;
args VARCHAR(255),;
rets VARCHAR(255),;
fi VARCHAR(255),;
li INT,;
PRIMARY KEY(id);
) DEFAULT CHARSET ="UTF8";;
