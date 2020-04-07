#!/bin/bash

die() {
	echo $@ 2>&1
	exit 1
}

MYPHP=$MYSHARE/php

grepn() {
	find $inifile || die no php.ini.
	ln=`egrep -m 1 -n "include_path[[:space:]]*=" $inifile `
	l=`echo $ln | sed -e "s/:.*//"`
	echo $ln | grep $MYPHP && return
	echo $inifile:$l:
	sudo vi $inifile +$l
}

if [ $# -ge 2 ] ; then
	inifile=$1
else
	inifile=`php --ini | grep Loaded | sed -e "s|[^/]*||"`
fi
grepn

if [ x`echo $inifile | grep cli` != x ]; then
	inifile=`echo $inifile | sed -e "s/cli/cgi/"`
	grepn
fi

echo "FORCE-RELOAD LIGHTTPD"
sudo service lighttpd force-reload

