import { Column, Model, Table, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table({
    tableName: 'roles',
})
export class Role extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}
