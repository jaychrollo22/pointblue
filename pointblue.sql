/*
Navicat MySQL Data Transfer

Source Server         : LOCAL
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : pointblue

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2021-12-01 10:26:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `file_leave`
-- ----------------------------
DROP TABLE IF EXISTS `file_leave`;
CREATE TABLE `file_leave` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `leave_type` varchar(255) NOT NULL,
  `date_from` date NOT NULL,
  `date_to` date NOT NULL,
  `leave_count` float(11,2) NOT NULL,
  `date_filed` date NOT NULL,
  `remarks` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of file_leave
-- ----------------------------
