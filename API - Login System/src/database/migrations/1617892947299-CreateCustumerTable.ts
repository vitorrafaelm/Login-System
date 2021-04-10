import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCustumerTable1617892947299 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(new Table({
            name: 'custumers', 
            columns: [
                {
                    name: 'id', 
                    type: 'uuid', 
                    isPrimary: true, 
                    generationStrategy: 'uuid', 
                    default: 'uuid_generate_v4()'
                }, 
                {
                    name: 'name', 
                    type: 'varchar'
                }, 
                {
                    name: 'lastName', 
                    type: 'varchar'
                }, 
                {
                    name: 'email', 
                    type: 'varchar'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users'); 
    }

}
