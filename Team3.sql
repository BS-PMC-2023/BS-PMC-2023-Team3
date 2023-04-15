drop table Users

CREATE TABLE Users(
FullName VARCHAR2(15),
UserEmail VARCHAR2(50),
UserPassword VARCHAR2(16),
Type VARCHAR2(10) CHECK(Type='Student' OR Country= 'Teacher')
);