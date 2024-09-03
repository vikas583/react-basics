Redux is something separate and react-redux is sep. , redux-toolkit is used to integrate redux in react and react-redux is the package used to bridge between react and redux.
RTK do automation of so many task, never mutate your state.
Steps:
1. create a store (Every application has 1 store called as single source truth)
2. In store value is only updated using reducer.
3. We call feature as a slice, to create slice name, initialState & list of reducers (key: func).
4. export the individual functionality from slicer and other is main source of reducer that will be used in store.
5. in component we can use useDispatch to send value and to get value we can use useSelector.