import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state = {hasError : false}
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo)
    }

    render() {
        if(this.state.hasError){
            return <h1>Ops Something went wrong</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary
