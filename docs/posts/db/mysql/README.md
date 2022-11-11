---
title: SQL
---

建表

```sql
create table Course(
    CNo char(10) NOT NULL ,
    CName varchar(50) NOT NULL ,
    Grade ENUM('1','1.5','2','2.5','3','3.5','4','4.5','5'),
    Term int check ( Term>0 and Term <9 ),
    TNo char(8),
    DepID int NOT NULL 
    FOREIGN KEY (TNo) REFERENCES Teacher(TNo),
    FOREIGN KEY (DepID) REFERENCES Department(DepID)
);
```

