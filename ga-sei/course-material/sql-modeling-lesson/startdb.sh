#!/usr/bin/env bash

datadir=$(pwd)/data
dbname="test"
dbuser="testuser"

if [[ ! -d $datadir ]]; then
  echo "INIT POSTGRES DB UNDER $(whoami)"

  initdb -W $datadir\
    && pg_ctl -D $datadir -l logfile start \
    && echo "sleeping for 2 seconds for server to start"\
    && sleep 2\
    && psql postgres $(whoami) -e -c "CREATE DATABASE $dbname ;"\
    && psql postgres $(whoami) -e -c "CREATE USER $dbuser WITH PASSWORD '$dbname' ;"\
    && psql postgres $(whoami) -e -c "GRANT ALL PRIVILEGES ON DATABASE $dbname TO $dbuser ;"
else
   pg_ctl -D $datadir -l logfile start
fi
