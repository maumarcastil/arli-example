'use client ';

import { Card, Typography } from '@material-tailwind/react';

const TABLE_HEAD = ['Name', 'Job', 'Employed', ''];

const TABLE_ROWS = [
  {
    uid: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    comercialName: 'JD Enterprises',
  },
  {
    uid: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    comercialName: 'Smith Solutions',
  },
  {
    uid: '3',
    name: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    comercialName: 'Johnson Consulting',
  },
  {
    uid: '4',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    comercialName: 'Davis Co.',
  },
  {
    uid: '5',
    name: 'William Brown',
    email: 'william.brown@example.com',
    comercialName: 'Brown & Sons',
  },
  {
    uid: '6',
    name: 'Olivia Garcia',
    email: 'olivia.garcia@example.com',
    comercialName: 'Garcia Innovations',
  },
  {
    uid: '7',
    name: 'James Martinez',
    email: 'james.martinez@example.com',
    comercialName: 'Martinez Industries',
  },
  {
    uid: '8',
    name: 'Isabella Rodriguez',
    email: 'isabella.rodriguez@example.com',
    comercialName: 'Rodriguez & Partners',
  },
  {
    uid: '9',
    name: 'Benjamin Lee',
    email: 'benjamin.lee@example.com',
    comercialName: 'Lee Technologies',
  },
  {
    uid: '10',
    name: 'Sophia Hernandez',
    email: 'sophia.hernandez@example.com',
    comercialName: 'Hernandez Holdings',
  },
];

const CollectionTable = () => {
  return (
    <>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ name, email, comercialName }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? 'p-4'
                : 'p-4 border-b border-blue-gray-50';

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {comercialName}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      Edit
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default CollectionTable;
