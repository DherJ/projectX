package com.mamiko.bo;


public class Parameter {

	private String parameterCode;
	private String parameterValue;
	
	public Parameter() {}

	public String getParameterCode() {
		return parameterCode;
	}

	public void setParameterCode(String parameterCode) {
		this.parameterCode = parameterCode;
	}

	public String getParameterValue() {
		return parameterValue;
	}

	public void setParameterValue(String parameterValue) {
		this.parameterValue = parameterValue;
	}

	@Override
	public String toString() {
		return "Parameter [parameterCode=" + parameterCode + ", parameterValue=" + parameterValue + "]";
	}

}
