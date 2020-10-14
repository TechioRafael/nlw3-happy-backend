import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Orphanage from './Orphanage';

@Entity('images') // Define que a classe abaixo esta relacionada com essa tabela
export default class Image{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({name:'orphanage_id'})
    orphanage: Orphanage;
}