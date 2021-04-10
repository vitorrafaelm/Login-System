import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'; 

@Entity('custumers')
class Costumer {

    @PrimaryGeneratedColumn('uuid')
    id: number; 

    @Column()
    name: string; 

    @Column()
    lastName: string; 

    @Column()
    email: string; 
}

export default Costumer; 