```react
noSource: true
---
<React.Fragment>
	<V6Banner>
		<AcceptsStyledSystemProps />
	</V6Banner>
</React.Fragment>
```

Buttons allow users to command the computer to take some action. Buttons, like all standard form components, usually have 16 px space between them.

## Component Variations

### Variants

```react
showSource: true
---
<ButtonDemo>
	<Button variant="primary" size="medium">
		Primary
	</Button>
	<Button variant="secondary" size="medium">
		Secondary
	</Button>
	<Button variant="minor" size="medium">
		Minor
	</Button>
	<Button variant="transparent" size="medium">
		Transparent
	</Button>
	<Button variant="minorTransparent" size="medium">
		Minor Transparent
	</Button>
	<Button variant="link" size="medium">
		Link
	</Button>
	<Button variant="danger" size="medium">
		Danger
	</Button>
	<Button variant="dangerSpecial" size="medium">
		Danger (Special)
	</Button>
</ButtonDemo>
```

### Size

```react
showSource: true
---
<ButtonDemo>
	<Button variant="primary" size="small">
		Small
	</Button>
	<Button variant="primary" size="medium">
		Medium
	</Button>
	<Button variant="primary" size="large">
		Large
	</Button>
</ButtonDemo>
```

### With Icon

```react
showSource: true
---
<ButtonDemo>
	<Button variant="primary" size="large" icon={<GearIcon />}>
		Settings
	</Button>
	<Button variant="primary" size="small" icon={<GearIcon />}>
		Settings
	</Button>
	<Button variant="primary" size="small" icon={<GearIcon />} />
	<Button variant="transparent" size="small" icon={<GearIcon />} />
	<Button variant="minorTransparent" size="small" icon={<GearIcon />} />
</ButtonDemo>
```

### Responsive Sizes

Pass an array of sizes corresponding to breakpoints.

```react
showSource: true
---
<Button variant="primary" size={['large', 'medium']}>
	Go
</Button>
```

### Supported style customizations

This component accepts styled-system props.

```react
showSource: true
---
<ButtonDemo>
	<Button variant="primary" size="large" backgroundColor="plum">
		Plum
	</Button>
	<Button variant="primary" size="large" width="200px">
		200px Wide
	</Button>
	<Button variant="primary" textStyle="ui.12" padding={3}>
		12px Font, 8px Padding
	</Button>
</ButtonDemo>
```

## Disabled states

```react
showSource: true
---
<ButtonDemo>
	<Button variant="primary" size="medium" disabled>
		Primary
	</Button>
	<Button variant="secondary" size="medium" disabled>
		Secondary
	</Button>
	<Button variant="minor" size="medium" disabled>
		Minor
	</Button>
	<Button variant="transparent" size="medium" disabled>
		Transparent
	</Button>
	<Button variant="link" size="medium" disabled>
		Link
	</Button>
	<Button variant="danger" size="medium" disabled>
		danger
	</Button>
	<Button variant="dangerSpecial" size="medium" disabled>
		Danger (Special)
	</Button>
</ButtonDemo>
```

## Loading prop

```react
showSource: true
state: { loading: false }
---
<ButtonDemo>
	<Button variant="primary" loading={state.loading} onClick={() => {
		setState({ loading: true });
		setTimeout(() => setState({ loading: false }), 1000);
	}}>
		Primary
	</Button>
	<Button variant="secondary" loading={state.loading} onClick={() => {
		setState({ loading: true });
		setTimeout(() => setState({ loading: false }), 1000);
	}}>
		Secondary
	</Button>
	<Button variant="primary" icon={<GearIcon />} loading={state.loading} onClick={() => {
		setState({ loading: true });
		setTimeout(() => setState({ loading: false }), 1000);
	}}>
		With Icon
	</Button>
	<Button variant="transparent" icon={<GearIcon />} loading={state.loading} onClick={() => {
		setState({ loading: true });
		setTimeout(() => setState({ loading: false }), 1000);
	}} />
</ButtonDemo>
```

## MultiButtons

MultiButtons inside a container "join" together

```react
showSource: true
---
<ButtonDemo>
	<Box>
		<MultiButton variant="primary">Primary</MultiButton>
		<MultiButton variant="secondary">Secondary</MultiButton>
		<MultiButton variant="transparent">Transparent</MultiButton>
	</Box>
</ButtonDemo>
```

## Button Select

A common use of MultiButtons is for a "select" like group of buttons serving as options

```react
showSource: true
state: { value: 0 }
---
<ButtonDemo>
	<ButtonSelect
		size="small"
		textStyle="ui.14"
		minWidth="72px"
		value={state.value}
		options={[
			{value: 0, display: "Zero"},
			{value: 1, display: "One"},
			{value: 2, display: "Two"},
			{value: 3, display: "Three", color: "green"},
		]}
		onChange={(value) => setState({ value })}
	/>
</ButtonDemo>
```

## Button Groups (deprecated)
Prefer using `MultiButton` or `ButtonSelect`

```react
showSource: true
---
<ButtonDemo>
	<SegmentedButtonGroup>
		<Button variant="transparent" active size="medium">
			Primary
		</Button>
		<Button variant="transparent" size="medium">
			Secondary
		</Button>
		<Button variant="transparent" size="medium">
			Minor
		</Button>
	</SegmentedButtonGroup>
</ButtonDemo>
```
