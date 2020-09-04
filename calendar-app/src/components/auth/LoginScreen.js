import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export const LoginScreen = () => {
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>

                        <Link 
                            // to="/auth/register"
                            to="/register"
                            className="btnSubmit"
                        >
                            Create New Account
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    );
};