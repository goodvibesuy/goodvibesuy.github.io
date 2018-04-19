mysqldump -u root -p'espanhaRoletti30!' good -r /root/db-backup/data/backup-good_$(date +%Y-%m-%d-%H.%M.%S).sql
mysqldump -u root -p'espanhaRoletti30!' master -r /root/db-backup/data/backup-master_$(date +%Y-%m-%d-%H.%M.%S).sql
