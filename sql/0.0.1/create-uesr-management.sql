-- ----------------------------------------------------------------------------
-- Table application.LoginLogs
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `application`.`LoginLogs` (
  `id` INT NOT NULL,
  `route` VARCHAR(255) NULL DEFAULT NULL,
  `message` VARCHAR(255) NULL DEFAULT NULL,
  `status` VARCHAR(255) NULL DEFAULT NULL,
  `extraInfo` VARCHAR(255) NULL,
  `isActive` TINYINT NULL DEFAULT 1,
  `_status` VARCHAR(255) NULL,
  `deletedAt` DATETIME NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `createdBy` INT NULL,
  `updatedBy` INT NULL,
  `userId` INT NULL,
  `deletedBy` INT NULL,
  PRIMARY KEY (`id`)
  );


-- ----------------------------------------------------------------------------
-- Table application.Permissions
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `application`.`Permissions` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NULL DEFAULT '',
  `label` VARCHAR(255) NULL DEFAULT '',
  `type` VARCHAR(255) NULL DEFAULT 'menuitem',
  `link` VARCHAR(255) NULL DEFAULT '',
  `icon` VARCHAR(255) NULL DEFAULT '',
  `appComponent` VARCHAR(255) NULL DEFAULT '',
  `_status` VARCHAR(255) NULL,
  `deletedAt` DATETIME NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `createdBy` INT NULL,
  `updatedBy` INT NULL,
  `parentId` INT NULL,
  `deletedBy` INT NULL,
  PRIMARY KEY (`id`)
  );

-- ----------------------------------------------------------------------------
-- Table application.PersonContacts
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `application`.`PersonContacts` (
  `id` INT NOT NULL,
  `type` VARCHAR(255) NULL DEFAULT '',
  `data` VARCHAR(255) NULL DEFAULT '',
  `verified` TINYINT NULL DEFAULT 0,
  `primaryFlag` TINYINT NULL DEFAULT 0,
  `notificationFlag` TINYINT NULL DEFAULT 0,
  `isActive` TINYINT NULL DEFAULT 1,
  `_status` VARCHAR(255) NULL,
  `deletedAt` DATETIME NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `personId` INT NULL,
  `createdBy` INT NULL,
  `updatedBy` INT NULL,
  `deletedBy` INT NULL,
  PRIMARY KEY (`id`));

-- ----------------------------------------------------------------------------
-- Table application.Persons
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `application`.`Persons` (
  `id` INT NOT NULL,
  `firstName` VARCHAR(255) NULL DEFAULT '',
  `middleName` VARCHAR(255) NULL DEFAULT '',
  `lastName` VARCHAR(255) NULL DEFAULT '',
  `photoUrl` VARCHAR(255) NULL DEFAULT '',
  `extraInfo` VARCHAR(255) NULL,
  `height` DOUBLE NULL,
  `weight` DOUBLE NULL,
  `rating` DOUBLE NULL,
  `medicalId` VARCHAR(255) NULL DEFAULT '',
  `phoneVerified` TINYINT NULL DEFAULT 0,
  `emailVerified` TINYINT NULL DEFAULT 0,
  `isActive` TINYINT NULL DEFAULT 1,
  `isVerified` TINYINT NULL DEFAULT 0,
  `dob` DATETIME NULL,
  `gender` VARCHAR(255) NULL DEFAULT '',
  `profileId` VARCHAR(255) NULL DEFAULT '',
  `userInvitationToken` VARCHAR(255) NULL DEFAULT '',
  `website` VARCHAR(255) NULL DEFAULT '',
  `_status` VARCHAR(255) NULL,
  `deletedAt` DATETIME NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `departmentId` INT NULL,
  `userId` INT NULL,
  `createdBy` INT NULL,
  `updatedBy` INT NULL,
  `deletedBy` INT NULL,
  `marritalStatus` VARCHAR(255) NULL DEFAULT '',
  `bloodGroup` VARCHAR(255) NULL DEFAULT '',
  PRIMARY KEY (`id`)
  );

-- ----------------------------------------------------------------------------
-- Table application.Roles
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `application`.`Roles` (
  `id` INT NOT NULL,
  `role` VARCHAR(255) NULL DEFAULT '',
  `priority` INT NULL DEFAULT 0,
  `isActive` TINYINT NULL DEFAULT 1,
  `_status` VARCHAR(255) NULL,
  `deletedAt` DATETIME NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `createdBy` INT NULL,
  `updatedBy` INT NULL,
  `deletedBy` INT NULL,
  PRIMARY KEY (`id`)
 );

-- ----------------------------------------------------------------------------
-- Table application.RolePermissions
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `application`.`RolePermissions` (
  `id` INT NOT NULL,
  `isActive` TINYINT NULL DEFAULT 1,
  `filter` VARCHAR(255) NULL,
  `priority` INT NULL DEFAULT 0,
  `isVisible` TINYINT NULL DEFAULT 1,
  `_status` VARCHAR(255) NULL,
  `deletedAt` DATETIME NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `permissionId` INT NULL,
  `roleId` INT NULL,
  `createdBy` INT NULL,
  `updatedBy` INT NULL,
  `deletedBy` INT NULL,
  PRIMARY KEY (`id`)
 );

-- ----------------------------------------------------------------------------
-- Table application.UserPermissions
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `application`.`UserPermissions` (
  `id` INT NOT NULL,
  `isActive` TINYINT NULL DEFAULT 1,
  `filter` VARCHAR(255) NULL,
  `priority` INT NULL DEFAULT 0,
  `_status` VARCHAR(255) NULL,
  `deletedAt` DATETIME NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `permissionId` INT NULL,
  `createdBy` INT NULL,
  `updatedBy` INT NULL,
  `userId` INT NULL,
  `deletedBy` INT NULL,
  PRIMARY KEY (`id`)
  );

-- ----------------------------------------------------------------------------
-- Table application.Users
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `application`.`Users` (
  `id` INT NOT NULL,
  `email` VARCHAR(255) NULL DEFAULT '',
  `phone` VARCHAR(255) NULL DEFAULT '',
  `password` VARCHAR(255) NULL DEFAULT '',
  `availableTokens` DOUBLE NULL,
  `isActive` TINYINT NULL DEFAULT 1,
  `firstLogin` TINYINT NULL DEFAULT 0,
  `_status` VARCHAR(255) NULL,
  `deletedAt` DATETIME NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `roleId` INT NULL,
  `deletedBy` INT NULL,
  `createdBy` INT NULL,
  `updatedBy` INT NULL,
  PRIMARY KEY (`id`)
 );

-- ----------------------------------------------------------------------------
-- Table application.UserSettings
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `application`.`UserSettings` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NULL,
  `label` VARCHAR(255) NULL DEFAULT '',
  `value` LONGTEXT ,
  `_status` VARCHAR(255) NULL,
  `deletedAt` DATETIME NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `userId` INT NULL,
  `createdBy` INT NULL,
  `updatedBy` INT NULL,
  `deletedBy` INT NULL,
  PRIMARY KEY (`id`)
  );

-- ----------------------------------------------------------------------------
-- Table application.UserTokens
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `application`.`UserTokens` (
  `id` INT NOT NULL,
  `amount` VARCHAR(255) NULL DEFAULT '',
  `paymentDate` DATETIME NULL,
  `token` DOUBLE NULL,
  `status` VARCHAR(255) NULL DEFAULT 'add',
  `isActive` TINYINT NULL DEFAULT 1,
  `_status` VARCHAR(255) NULL,
  `deletedAt` DATETIME NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `userId` INT NULL,
  `createdBy` INT NULL,
  `updatedBy` INT NULL,
  `deletedBy` INT NULL,
  PRIMARY KEY (`id`)
  );
