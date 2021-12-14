/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 80026
Source Host           : localhost:3306
Source Database       : arithmetic

Target Server Type    : MYSQL
Target Server Version : 80026
File Encoding         : 65001

Date: 2021-12-14 22:00:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for score
-- ----------------------------
DROP TABLE IF EXISTS `score`;
CREATE TABLE `score` (
  `sid` int NOT NULL AUTO_INCREMENT,
  `uid` int DEFAULT NULL,
  `type` int DEFAULT NULL,
  `num` int DEFAULT NULL,
  `timeStamp` int DEFAULT NULL,
  `finalScore` int DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`sid`),
  KEY `idFK` (`uid`),
  CONSTRAINT `idFK` FOREIGN KEY (`uid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of score
-- ----------------------------
INSERT INTO `score` VALUES ('1', '1', '121', '45', '120', '375', '2021-12-14 20:44:58');
INSERT INTO `score` VALUES ('2', '2', '122', '45', '123', '365', '2021-12-14 20:45:01');
INSERT INTO `score` VALUES ('3', '1', '123', '36', '124', '290', '2021-12-14 20:45:06');
INSERT INTO `score` VALUES ('4', '1', '231', '34', '123', '276', '2021-12-14 20:45:08');
INSERT INTO `score` VALUES ('5', '1', '121', '23', '123', '400', '2021-12-07 21:21:00');
INSERT INTO `score` VALUES ('7', '1', '231', '400', '4', '100000', '2021-12-14 21:28:17');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `sex` bit(1) DEFAULT NULL,
  `authority` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'ccb', 'CCB', '333', '', '\0');
INSERT INTO `user` VALUES ('2', 'pjy', 'PJY', '111', '', '\0');
INSERT INTO `user` VALUES ('3', 'wck', 'WCK', '123', '', '\0');
INSERT INTO `user` VALUES ('4', 'admin', 'admin', 'admin', '', '');
INSERT INTO `user` VALUES ('5', 'girl', 'pg', '333', '\0', '\0');
INSERT INTO `user` VALUES ('6', 'badguy', 'bagu', '111', null, null);
