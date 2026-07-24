/*
  Warnings:

  - A unique constraint covering the columns `[usuariosId,eventosId]` on the table `inscricoes` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `inscricoes` DROP FOREIGN KEY `Inscricoes_eventosId_fkey`;

-- DropForeignKey
ALTER TABLE `inscricoes` DROP FOREIGN KEY `Inscricoes_usuariosId_fkey`;

-- DropIndex
DROP INDEX `Inscricoes_eventosId_fkey` ON `inscricoes`;

-- DropIndex
DROP INDEX `Inscricoes_usuariosId_fkey` ON `inscricoes`;

-- AlterTable
ALTER TABLE `eventos` ADD COLUMN `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `imagem` VARCHAR(191) NULL,
    MODIFY `descricao` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `inscricoes` MODIFY `status` ENUM('CONFIRMADA', 'LISTA_ESPERA', 'CHAMADA', 'CANCELADA') NOT NULL DEFAULT 'CONFIRMADA';

-- CreateIndex
CREATE UNIQUE INDEX `inscricoes_usuariosId_eventosId_key` ON `inscricoes`(`usuariosId`, `eventosId`);

-- AddForeignKey
ALTER TABLE `inscricoes` ADD CONSTRAINT `inscricoes_eventosId_fkey` FOREIGN KEY (`eventosId`) REFERENCES `eventos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inscricoes` ADD CONSTRAINT `inscricoes_usuariosId_fkey` FOREIGN KEY (`usuariosId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- RedefineIndex
CREATE UNIQUE INDEX `usuarios_email_key` ON `usuarios`(`email`);
DROP INDEX `Usuarios_email_key` ON `usuarios`;
