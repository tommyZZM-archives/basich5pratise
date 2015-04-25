127.0.0.1       klive.tommyweb

<VirtualHost *:80>
    DocumentRoot E:\KliveCloud\_m_Web\klive.tommyweb
    ServerName klive.tommyweb
    <Directory "E:\KliveCloud\_m_Web\klive.tommyweb">
        Options Indexes FollowSymLinks
        AllowOverride None
        Order allow,deny
        Allow from all
    </Directory>    
</VirtualHost>