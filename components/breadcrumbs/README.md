# Breadcrumbs

A breadcrumb is a type of secondary navigation scheme that reveals the user’s location in a website or Web application.


## Usage

In this component there is 2 component to arrange a breadcrumbs. There is breadcrumbs as a wrapper and BreadcumbItem as a breadcrumb item. For add separator you can put it on in breadcrumbs props. 

### Example

```jsx
import { Breadcrumbs, BreadcrumbItem } from ".";

export default function Component() {
  return (
     <Breadcrumbs
        separator=">"
      >
        <BreadcrumbItem>BCC</BreadcrumbItem>
        <BreadcrumbItem>Design System</BreadcrumbItem>
        <BreadcrumbItem lastItem>Tabs</BreadcrumbItem>
      </Breadcrumbs>
  );
}
```

### Skeleton

```jsx
import { Breadcrumbs, BreadcrumbItem } from ".";

export default function Component() {
  return (
    <Breadcrumbs separator="/">
        <BreadcrumbItem className="skeleton" lastItem>
          BCC
        </BreadcrumbItem>
        <BreadcrumbItem className="skeleton" lastItem>
          Design System
        </BreadcrumbItem>
        <BreadcrumbItem className="skeleton" lastItem>
          Tabs
        </BreadcrumbItem>
      </Breadcrumbs>
  );
}
```