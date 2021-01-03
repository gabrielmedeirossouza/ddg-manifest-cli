const output =
`<?xml version="1.0"?>
<!-- filename=adlcp_rootv1p2.xsd -->
<!-- Conforms to w3c http://www.w3.org/TR/xmlschema-1/ 2000-10-24-->

<xsd:schema xmlns="http://www.adlnet.org/xsd/adlcp_rootv1p2"
            targetNamespace="http://www.adlnet.org/xsd/adlcp_rootv1p2"
            xmlns:xml="http://www.w3.org/XML/1998/namespace"
            xmlns:imscp="http://www.imsproject.org/xsd/imscp_rootv1p1p2"
            xmlns:xsd="http://www.w3.org/2001/XMLSchema"
            elementFormDefault="unqualified"
            version="ADL Version 1.2">

        <xsd:import namespace="http://www.imsproject.org/xsd/imscp_rootv1p1p2" schemaLocation="imscp_rootv1p1p2.xsd"/>

        <xsd:element name="location" type="locationType"/>
        <xsd:element name="prerequisites" type="prerequisitesType"/>
        <xsd:element name="maxtimeallowed" type="maxtimeallowedType"/>
        <xsd:element name="timelimitaction" type="timelimitactionType"/>
        <xsd:element name="datafromlms" type="datafromlmsType"/>
        <xsd:element name="masteryscore" type="masteryscoreType"/>


        <xsd:element name="schema" type="newSchemaType"/>
        <xsd:simpleType name="newSchemaType">
                <xsd:restriction base="imscp:schemaType">
                        <xsd:enumeration value="ADL SCORM"/>
                </xsd:restriction>
        </xsd:simpleType>

        <xsd:element name="schemaversion" type="newSchemaversionType"/>
        <xsd:simpleType name="newSchemaversionType">
                <xsd:restriction base="imscp:schemaversionType">
                        <xsd:enumeration value="1.2"/>
                </xsd:restriction>
        </xsd:simpleType>


        <xsd:attribute name="scormtype">
            <xsd:simpleType>
                <xsd:restriction base="xsd:string">
                   <xsd:enumeration value="asset"/>
                   <xsd:enumeration value="sco"/>
                </xsd:restriction>
            </xsd:simpleType>
        </xsd:attribute>

        <xsd:simpleType name="locationType">
                <xsd:restriction base="xsd:string">
                        <xsd:maxLength value="2000"/>
                </xsd:restriction>
        </xsd:simpleType>


        <xsd:complexType name="prerequisitesType">
           <xsd:simpleContent>
              <xsd:extension base="prerequisiteStringType">
                  <xsd:attributeGroup ref="attr.prerequisitetype"/>
              </xsd:extension>
           </xsd:simpleContent>
        </xsd:complexType>

        <xsd:attributeGroup name="attr.prerequisitetype">
                <xsd:attribute name="type" use="required">
                        <xsd:simpleType>
                                <xsd:restriction base="xsd:string">
                                   <xsd:enumeration value="aicc_script"/>
                                </xsd:restriction>
                        </xsd:simpleType>
                </xsd:attribute>
        </xsd:attributeGroup>

        <xsd:simpleType name="maxtimeallowedType">
                <xsd:restriction base="xsd:string">
                        <xsd:maxLength value="13"/>
                </xsd:restriction>
        </xsd:simpleType>

        <xsd:simpleType name="timelimitactionType">
                <xsd:restriction base="stringType">
                        <xsd:enumeration value="exit,no message"/>
                        <xsd:enumeration value="exit,message"/>
                        <xsd:enumeration value="continue,no message"/>
                        <xsd:enumeration value="continue,message"/>
                </xsd:restriction>
        </xsd:simpleType>

        <xsd:simpleType name="datafromlmsType">
                <xsd:restriction base="xsd:string">
                        <xsd:maxLength value="255"/>
                </xsd:restriction>
        </xsd:simpleType>

        <xsd:simpleType name="masteryscoreType">
                <xsd:restriction base="xsd:string">
                        <xsd:maxLength value="200"/>
                </xsd:restriction>
        </xsd:simpleType>

        <xsd:simpleType name="stringType">
                <xsd:restriction base="xsd:string"/>
        </xsd:simpleType>
        
        <xsd:simpleType name="prerequisiteStringType">
                <xsd:restriction base="xsd:string">
                   <xsd:maxLength value="200"/>
                </xsd:restriction>
        </xsd:simpleType>

</xsd:schema>
`

export default output