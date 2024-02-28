import Pessoa from '@/components/Pessoa';

export default function exemploTs(){
    return (
        <div>
            <Pessoa nome="mariano" idade={30}/>
            <Pessoa nome="joana" />
        </div>
    );
}