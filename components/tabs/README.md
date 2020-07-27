# Tabs

Tabs for BCC Design System. Make it easy for users to move one tab with another tab that contains content that is in a different view

## Usage

Tabs components contain the following rc-tabs hooks:

- Tabs
- TabPane

Read the [`rc-tabs` reference table](https://react-component.github.io/tabs/#api) for more information about these hooks and how they work.

### Basic

```jsx
import { Tabs, TabPane } from ".";

export default function Component() {
  return (
    <Tabs defaultActiveKey="1" tabStyle="Primary">
      <TabPane tab="Tab 1" key="1"></TabPane>
      <TabPane tab="Tab 2" key="2"></TabPane>
      <TabPane tab="Tab 3" key="3" disabled></TabPane>
    </Tabs>
  );
}
```

### With Icon

```jsx
import { Tabs, TabPane } from ".";

export default function Component() {
  return (
    <Tabs defaultActiveKey="1" tabStyle="Darkk">
      <TabPane
        tab={
          <span>
            <FontAwesomeIcon icon={faShoppingBag} />
          </span>
        }
        key="1"
      ></TabPane>
      <TabPane
        tab={
          <span>
            <FontAwesomeIcon icon={faHome} />
          </span>
        }
        key="2"
      ></TabPane>
      <TabPane
        tab={
          <span>
            <FontAwesomeIcon icon={faUserCircle} />
          </span>
        }
        key="3"
      ></TabPane>
    </Tabs>
  );
}
```

### With Icon and Text

```jsx
import { Tabs, TabPane } from ".";

export default function Component() {
  return (
    <Tabs defaultActiveKey="1" tabStyle="Darkk">
      <TabPane
        tab={
          <span className="icon-with-text">
            <FontAwesomeIcon icon={faShoppingBag} />
            <p>Shop</p>
          </span>
        }
        key="1"
      ></TabPane>
      <TabPane
        tab={
          <span className="icon-with-text">
            <FontAwesomeIcon icon={faHome} />
            <p>Home</p>
          </span>
        }
        key="2"
      ></TabPane>
      <TabPane
        tab={
          <span className="icon-with-text">
            <FontAwesomeIcon icon={faUserCircle} />
            <p>User</p>
          </span>
        }
        key="3"
      ></TabPane>
    </Tabs>
  );
}
```
