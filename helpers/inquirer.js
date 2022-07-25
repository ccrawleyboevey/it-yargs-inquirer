import inquirer from 'inquirer';
import colors   from 'colors';
 
const menuOptions = [
  {
    type: 'list',
    name: 'option',
    message: 'Seleccione una opción',
        choices: [
            {
                value: '1',
                name:  `${ '1.'.green } Crear proceso`
            },
            {
                value: '2',
                name:  `${ '2.'.green } Listar procesos`
            },
            {
                value: '0',
                name:  `${ '0.'.green } Salir`
            },
        ]
  },
];
 
const inquirerMenu = async () => {
  console.clear();
  console.log('==========================='.green);
  console.log('   Seleccione una opción'.white);
  console.log('===========================\n'.green);
  const { option } = await inquirer.prompt(menuOptions);
  return option;
};

const pausa = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter'.green } para continuar`
        }
    ]
    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if( value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];
    const { desc } = await inquirer.prompt(question);
    return desc;
}
 
export { 
    inquirerMenu,
    pausa,
    leerInput
};
