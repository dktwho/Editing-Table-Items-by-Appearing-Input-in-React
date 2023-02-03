import { nanoid } from 'nanoid'

const initNotes = [
	{
		id: nanoid(),
		fields: [
			{name: 'prop1', value: 'value11', isEdit: false},
			{name: 'prop2', value: 'value12', isEdit: false},
			{name: 'prop3', value: 'value13', isEdit: false},
		]
	},
	{
		id: nanoid(),
		fields: [
			{name: 'prop1', value: 'value21', isEdit: false},
			{name: 'prop2', value: 'value22', isEdit: false},
			{name: 'prop3', value: 'value23', isEdit: false},
		]
	},
	{
		id: nanoid(),
		fields: [
			{name: 'prop1', value: 'value31', isEdit: false},
			{name: 'prop2', value: 'value32', isEdit: false},
			{name: 'prop3', value: 'value33', isEdit: false},
		]
	},
];

export  { initNotes, nanoid }
