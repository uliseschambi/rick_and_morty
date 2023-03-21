import Card from '../Card';

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <>
      {/* No pasar el obj completo. key no es una prop. Usar siempre el id como key para evitar una mala indexación al actualizar*/}
      {characters.map(({ id, name, species, gender, image }, index) => (
        <Card key={id} id={id} name={name} species={species} gender={gender} image={image} onClose={onClose} />
      ))}
    </>
  );
}
