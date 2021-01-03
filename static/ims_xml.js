const output =
`<?xml version="1.0" encoding="UTF-8"?>
<!-- filename=ims_xml.xsd -->
<xsd:schema targetNamespace="http://www.w3.org/XML/1998/namespace" xmlns="http://www.w3.org/XML/1998/namespace" xmlns:xsd="http://www.w3.org/2001/XMLSchema" elementFormDefault="unqualified">
	<!-- 2001-02-22 edited by Thomas Wason IMS Global Learning Consortium, Inc. -->
	<xsd:annotation>
		<xsd:documentation>In namespace-aware XML processors, the &quot;xml&quot; prefix is bound to the namespace name http://www.w3.org/XML/1998/namespace.</xsd:documentation>
		<xsd:documentation>Do not reference this file in XML instances</xsd:documentation>
	</xsd:annotation>
	<xsd:attribute name="lang" type="xsd:language">
		<xsd:annotation>
			<xsd:documentation>Refers to universal  XML 1.0 lang attribute</xsd:documentation>
		</xsd:annotation>
	</xsd:attribute>
	<xsd:attribute name="base" type="xsd:anyURI">
		<xsd:annotation>
			<xsd:documentation>Refers to XML Base: http://www.w3.org/TR/xmlbase</xsd:documentation>
		</xsd:annotation>
	</xsd:attribute>
	<xsd:attribute name="link" type="xsd:anyURI"/>
</xsd:schema>
`

export default output