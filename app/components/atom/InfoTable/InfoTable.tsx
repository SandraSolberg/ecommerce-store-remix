import { KeyValuePair } from '~/types/types';

type InfoTableType = {
  list: KeyValuePair[];
};

const InfoTable = ({ list }: InfoTableType) => {
  return (
    <table className=''>
      <tbody>
        {list.map((el) =>
          Object.entries(el).map(([key, value]) => (
            <tr key={key}>
              <td className='font-bold pr-8'>{key}</td>
              <td>{value}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default InfoTable;
