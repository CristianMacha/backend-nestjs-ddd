import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1682564578382 implements MigrationInterface {
    name = 'FirstMigration1682564578382'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`userUid\` \`userUid\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`password\` \`password\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`password\` \`password\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`userUid\` \`userUid\` varchar(255) NULL DEFAULT 'NULL'`);
    }

}
