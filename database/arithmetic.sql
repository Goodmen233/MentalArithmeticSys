/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 80026
Source Host           : localhost:3306
Source Database       : arithmetic

Target Server Type    : MYSQL
Target Server Version : 80026
File Encoding         : 65001

Date: 2021-12-05 13:41:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for score
-- ----------------------------
DROP TABLE IF EXISTS `score`;
CREATE TABLE `score` (
  `sid` int NOT NULL,
  `uid` int DEFAULT NULL,
  `type` int DEFAULT NULL,
  `num` int DEFAULT NULL,
  `time` int DEFAULT NULL,
  PRIMARY KEY (`sid`),
  KEY `uid` (`uid`),
  CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of score
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `authority` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'ccb', 'CCB', '333', '\0');
INSERT INTO `user` VALUES ('2', 'pjy', 'PJY', '111', '\0');
INSERT INTO `user` VALUES ('3', 'wck', 'WCK', '123', '\0');
INSERT INTO `user` VALUES ('4', 'admin', 'admin', 'admin', '');
