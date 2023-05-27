DROP TABLE USERS;

CREATE TABLE USERS (
FIRSTNAME VARCHAR2(15 BYTE), 
LASTNAME VARCHAR2(15 BYTE), 
EMAIL VARCHAR2(50 BYTE), 
BIRTHDAY  VARCHAR2(50 BYTE), 
TITLE VARCHAR2(20 BYTE) DEFAULT 'Student', 
USERNAME VARCHAR2(15 BYTE), 
PASSWORD VARCHAR2(20 BYTE), 
PRIMARY KEY (USERNAME, EMAIL),
CHECK (TITLE IN ('Student','Lecture','StorgeManger'))
);

DROP TABLE ITEMS;
CREATE TABLE ITEMS (
NAME VARCHAR2(50) NOT NULL,
S_N VARCHAR2(20) , 
CATEGORY VARCHAR2(50) NOT NULL, 
ANCILLARY_ITEMS VARCHAR2(100),
AMOUNT NUMBER DEFAULT 1,
STATUS VARCHAR2(20) DEFAULT 'IN' NOT NULL,
PRECAUTIONS VARCHAR2(100),
BORROW_DATE VARCHAR2(50),
RETURN_DATE VARCHAR2(50),
PRIMARY KEY (NAME, S_N),
CHECK (STATUS IN ('IN','OUT','FAULTY'))
);

DROP TABLE ORDERS;
CREATE TABLE ORDERS (
USERNAME VARCHAR2(15),
NAMEITEM  VARCHAR2(50),
S_N VARCHAR2(20),
BORROW_DATE DATE,
RETURN_DATE DATE,
STATUS_ORDER VARCHAR2(20)  DEFAULT 'In processed',
PRIMARY KEY (USERNAME,NAMEITEM,S_N,BORROW_DATE),
 CHECK (STATUS_ORDER IN ('In processed','Accept','Reject'))
);

DROP TABLE Studio_Podcast_Order;
CREATE TABLE Studio_Podcast_Order(
USERNAME  VARCHAR2(15),
TYPE VARCHAR2(15),
NUM NUMBER ,
DATE_TIME TIMESTAMP,
STATUS VARCHAR2(20) DEFAULT 'In processed',
PRIMARY KEY (TYPE,NUM,DATE_TIME),
CHECK (TYPE IN ('Studio','Podcast')),
CHECK (STATUS IN ('In processed','Accept','Reject'))
);

DROP TABLE Studio_Podcast;
CREATE TABLE Studio_Podcast(
TYPE VARCHAR2(15),
NUM NUMBER ,
PRIMARY KEY (TYPE,NUM),
CHECK (TYPE IN ('Studio','Podcast'))
);


INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Sony A7III', '4476762', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Sony A7III', '4477024', 'CAMERA', '1', 'FAULTY');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Sony A7III', '4477009', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Sony A7III', '4476730', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Sony A7III', '4476731', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Sony A7III', '4476732', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Sony A7III', '4476763', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Sony A7III', '4477025', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Sony A7III', '4477008', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS(NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Sony A7III', '4476733', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Panasonic DC-S5', 'WJBA001375', 'CAMERA', '1', 'FAULTY');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Panasonic DC-S5', 'WJBA001396', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Panasonic DC-S5', 'WJBA001397', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Panasonic DC-S5', 'WJBA001400', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Panasonic DC-S5', 'WJBA001399', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Panasonic DC-S5', 'WJCA001283', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Panasonic DC-S5', 'WJCA001273', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Panasonic DC-S5', 'WJCA001275', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Panasonic DC-S5', 'WJBA001411', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Panasonic DC-S5', 'WJCA001289', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Sony A7III lens 105', '4663360', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Sony A7III lens 105', '4658456', 'CAMERA', '1', 'IN');
INSERT INTO ITEMS(NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Rode micro mic', 'DC1067184', 'REC', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Rode micro mic', 'DC1130282', 'REC', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Rode micro mic', 'DC1130284', 'REC', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Rode micro mic', 'DC1179964', 'REC', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Rode micro mic', 'DC1277972', 'REC', '1', 'IN');
INSERT INTO ITEMS(NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Rode micro mic', 'DC1047711', 'REC', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Rode micro mic', 'DC1277989', 'REC', '1', 'IN');
INSERT INTO ITEMS(NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Rode micro mic', 'DC1277969', 'REC', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Rode micro mic', 'DC1277974', 'REC', '1', 'IN');
INSERT INTO ITEMS(NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Rode micro mic', 'DC1179739', 'REC', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('RodeCaster Pro 2', 'GV0048533', 'REC', '1', 'IN');
INSERT INTO ITEMS (NAME,S_N, CATEGORY, AMOUNT, STATUS) VALUES ('SM7B','1','REC', '2', 'IN');
INSERT INTO ITEMS (NAME,S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Sony MDR-7506','2', 'REC', '2', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Zoom-H8', 'C52041083', 'REC', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Atmos Sumo19SE', 'K149S9SE51E43', 'REC', '1', 'IN');
INSERT INTO ITEMS(NAME,S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Sony UWP-D21','3', 'REC', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('URX-P40', '200661', 'REC', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('URTX-B40', '200651', 'REC', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'X1N79D6THQ', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'Q97GTH4RXC', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'VKGGX4KQX0', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'YT6C45QCVK', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'RY462C42NY', 'APPLE', '1', 'IN');
INSERT INTO ITEMS(NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'L9VQ09YFY4', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'FQWJ4CMVWN', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'X360W6PQGD', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'K3P00L9TMX', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'W5N44HWCPY', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'GLXVJJHXL6', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'N3P969D4XH', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'FG2JVPF1VJ', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'TMQW2LGYK1', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'VT2J6WX6P6', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'V9W2PWP16L', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'P6YR431795', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'VQT7VX4H51', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'LLXP0RYR2H', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'HGYY00YVJY', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'H0XTJXVQ99', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'P944MYVRQL', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'DM7XJHCWQF', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'PPGVY923G4', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'FXH2R3CWDW', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'VQYFXC7LRL', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'TX4VYXQ7KD', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'LKGW146TLX', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'DTH916CYFT', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('iPad Pro', 'DCQKJV0W1D', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('MacBook Pro', 'X61HPQYXF', 'APPLE', '1', 'IN');
INSERT INTO ITEMS (NAME,S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Manfrotto 190X','4', 'TRIPOD', '3', 'IN');
INSERT INTO ITEMS (NAME,S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Manfrotto BeFree Advanced','5', 'TRIPOD', '6', 'IN');
INSERT INTO ITEMS (NAME,S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Manfrotto 1004BAC-3','6', 'TRIPOD', '3', 'IN');
INSERT INTO ITEMS (NAME,S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Manfrotto 1052BAC','7', 'TRIPOD', '2', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('HITACHI-CP-X3042WN-EF', 'F6LE04648', 'Projectors', '1', 'IN');
INSERT INTO ITEMS(NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('HITACHI-CP-EX250N-EF', 'F4AE08121', 'Projectors', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('HITACHI-CP-WX4022WN-GF', 'F5I011011', 'Projectors', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('HITACHI-CP-X300EF', 'F8AE04656', 'Projectors', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('HITACHI-CP-X2510N-EF', 'F9LE01944', 'Projectors', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('HITACHI-CP-X3021WN', 'F1JE01467', 'Projectors', '1', 'IN');
INSERT INTO ITEMS (NAME,S_N, CATEGORY, AMOUNT, STATUS) VALUES ('HDMI 5M','8', 'Cables', '5', 'IN');
INSERT INTO ITEMS (NAME,S_N, CATEGORY, AMOUNT, STATUS) VALUES ('VGA','9', 'Cables', '5', 'IN');
INSERT INTO ITEMS (NAME,S_N, CATEGORY, AMOUNT, STATUS) VALUES ('AC','10', 'Cables', '5', 'IN');
INSERT INTO ITEMS (NAME,S_N, CATEGORY, AMOUNT, STATUS) VALUES ('SDI 12G','11', 'Cables', '3', 'IN');
INSERT INTO ITEMS (NAME,S_N, CATEGORY, AMOUNT, STATUS) VALUES ('SDI 6G','12', 'Cables', '3', 'IN');
INSERT INTO ITEMS (NAME,S_N, CATEGORY, AMOUNT, STATUS) VALUES ('Micro Hdmi','13', 'Cables', '4', 'IN');
INSERT INTO ITEMS (NAME,S_N, CATEGORY, AMOUNT, STATUS) VALUES ('PL TRS','14', 'Cables', '2', 'IN');
INSERT INTO ITEMS (NAME,S_N, CATEGORY, AMOUNT, STATUS) VALUES ('XLR ','15', 'Cables', '6', 'IN');
INSERT INTO ITEMS (NAME, S_N,CATEGORY, AMOUNT, STATUS) VALUES ('XLR To PL 1/8"','16', 'Cables', '2', 'IN');
INSERT INTO ITEMS (NAME,S_N, CATEGORY, AMOUNT) VALUES ('FalconEyes BL-30TD II','17', 'Lights', '1');
INSERT INTO ITEMS (NAME,S_N, CATEGORY, AMOUNT) VALUES ('FalconEyes RX-24TDX','18', 'Lights', '1');
INSERT INTO ITEMS (NAME,S_N, CATEGORY, AMOUNT) VALUES ('GODOX M1','19', 'Lights', '2');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('HDMI to SDI 3G', '10489799', 'Convertors', '1', 'IN');
INSERT INTO ITEMS (NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('HDMI to SDI 3G', '7188995', 'Convertors', '1', 'IN');
INSERT INTO ITEMS(NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('BiDirectional SDI HDMI 12G', '9971855', 'Convertors', '1', 'IN');
INSERT INTO ITEMS(NAME, S_N, CATEGORY, AMOUNT, STATUS) VALUES ('BiDirectional SDI HDMI 12G', '9129562', 'Convertors', '1', 'IN');

INSERT INTO USERS(FIRSTNAME,LASTNAME,EMAIL,BIRTHDAY,USERNAME,PASSWORD) VALUES ('Yovel','Efraim','yovelef@ac.sce.ac.il','12/01/1998','Yovel123','12345678');
INSERT INTO USERS(FIRSTNAME,LASTNAME,EMAIL,BIRTHDAY,USERNAME,PASSWORD) VALUES ('Efrat','Kadosh','efratka@ac.sce.ac.il','22/02/1998','Efrat123','12345678');
INSERT INTO USERS(FIRSTNAME,LASTNAME,EMAIL,BIRTHDAY,USERNAME,PASSWORD) VALUES ('yam','Biton','yambi@ac.sce.ac.il','12/05/1996','Yam123','12345678');
INSERT INTO USERS(FIRSTNAME,LASTNAME,EMAIL,BIRTHDAY,USERNAME,PASSWORD) VALUES ('Israel','lasri','israela@ac.sce.ac.il','06/04/1996','Israel123','12345678');
INSERT INTO USERS(FIRSTNAME,LASTNAME,EMAIL,BIRTHDAY,TITLE,USERNAME,PASSWORD) VALUES ('Dani','Aflalo','daniaf@ac.sce.ac.il','19/05/1990','StorgeManger','Dani123','12345678');

INSERT INTO ORDERS(USERNAME,NAMEITEM,S_N,BORROW_DATE,RETURN_DATE) VALUES ('Efrat123','Sony A7III','4477024',to_date('12/05/2023' , 'DD/MM/YYYY'),to_date('28/05/2023' , 'DD/MM/YYYY'));
INSERT INTO ORDERS(USERNAME,NAMEITEM,S_N,BORROW_DATE,RETURN_DATE) VALUES ('Efrat123','Sony A7III','4476730',to_date('12/05/2023' , 'DD/MM/YYYY'),to_date('28/05/2023' , 'DD/MM/YYYY'));
INSERT INTO ORDERS(USERNAME,NAMEITEM,S_N,BORROW_DATE,RETURN_DATE) VALUES ('Yovel123','iPad Pro','Q97GTH4RXC',to_date('12/05/2023' , 'DD/MM/YYYY'),to_date('28/05/2023' , 'DD/MM/YYYY'));
INSERT INTO ORDERS(USERNAME,NAMEITEM,S_N,BORROW_DATE,RETURN_DATE) VALUES ('Israel123','Panasonic DC-S5','WJBA001375',to_date('12/05/2023' , 'DD/MM/YYYY'),to_date('28/05/2023' , 'DD/MM/YYYY'));

INSERT INTO studio_podcast(TYPE,NUM) VALUES ('Studio',1);
INSERT INTO studio_podcast(TYPE,NUM) VALUES ('Studio',2);
INSERT INTO studio_podcast(TYPE,NUM) VALUES ('Studio',3);
INSERT INTO studio_podcast(TYPE,NUM) VALUES ('Podcast',1);
INSERT INTO studio_podcast(TYPE,NUM) VALUES ('Podcast',2);
INSERT INTO studio_podcast(TYPE,NUM) VALUES ('Podcast',3);

INSERT INTO studio_podcast_Order(USERNAME,TYPE,NUM,DATE_TIME) VALUES ('Israel123','Studio',1,TO_TIMESTAMP('12/05/2023 13:00', 'DD-MM-YYYY HH24:MI'));

COMMIT;