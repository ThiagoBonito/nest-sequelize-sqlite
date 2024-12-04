import { Column, Model, Table, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Role } from "./role.entity";

@Table({
    tableName: 'users',
})
export class User extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @Column
    email: string;

    @Column
    password: string;

    @ForeignKey(() => Role)
    @Column
    roleId: number;

    @BelongsTo(() => Role)
    roleName: Role;
    
    @Column
    status: string;
    
    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}
