# Dropdown

Used when the user is asked to select an option from more than one option, option in particular category. The way to use it is by pressing the component when the dropdown menu appears, the user can select an option. Dropdown can be implemented on text components, text input, icons, navigation bars, and images.

## Usage

Put data into dropdown and add value props for the value of data you choose.

### Default

```jsx
import Dropdown, { DropdownItem } from './component/Dropdown';

export default function Component() {
    const [data] = useState([
        { value: 'FE', name: 'Frontend Developer' },
        { value: 'BE', name: 'Backend Developer' },
        { value: 'PM', name: 'Product Management' },
        { value: 'PD', name: 'Product Design' },
    ]);
    const [value, setValue] = useState('');

    return (
        <Dropdown value={value} placeholder="This is placeholder">
            {data.map((item) => (
                <DropdownItem
                    key={item.value}
                    onClick={() => setValue(item.name)}
                >
                    {item.name}
                </DropdownItem>
            ))}
        </Dropdown>
    );
}
```

### Scrollable

```jsx
import Dropdown, { DropdownItem } from './component/Dropdown';

export default function Component() {
    const [data] = useState([
        { value: 'FE', name: 'Frontend Developer' },
        { value: 'BE', name: 'Backend Developer' },
        { value: 'PM', name: 'Product Management' },
        { value: 'PD', name: 'Product Design' },
        { value: 'DS', name: 'Data Science' },
        { value: 'DO', name: 'DevOps Engineer' },
        { value: 'ME', name: 'Mobile Engineer' },
    ]);
    const [value, setValue] = useState('');
    return (
        <Dropdown type="scrollable" value={value} placeholder="This is placeholder">
            {data.map((item) => (
              <DropdownItem
                key={item.value}
                onClick={() => setValue(item.name)}
              >
                {item.name}
              </DropdownItem>
            ))}
        </Dropdown>
    );
}
```